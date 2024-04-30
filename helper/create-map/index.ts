import cloneDeep from 'lodash/cloneDeep'
import type {
  ClusterStudyNode,
  StudyNodeEntity,
  StudyPathState,
} from './entity/studyNode.entity'
import { MinHeap } from './heapStructure'
import tartGetStudyPathJson from '~/assets/data/target-study-path.json'
import studyPathJson from '~/assets/data/study-path.json'

const tartGetStudyPath = tartGetStudyPathJson as Record<
  string,
  ClusterStudyNode
>
const studyPath = studyPathJson as Record<string, StudyNodeEntity>

export function createMap(target: string | number, limitTime: number) {
  let population = [getInitState(target)]
  const solution: StudyPathState[] = []
  while (true) {
    const newPopulation = new MinHeap<StudyPathState>(
      (state: StudyPathState) => state.time
    )
    const haveNewGeneration = population.reduce((pre, state) => {
      const newGeneration = generateState(
        state,
        limitTime,
        newPopulation,
        solution
      )
      return pre || newGeneration
    }, false)
    population = evolvePopulation(newPopulation)
    if (!haveNewGeneration || solution.length > 10) break
  }
  const bestSolution = solution.sort((a, b) => a.time - b.time)[0]
  if (!bestSolution) {
    throw new Error('No solution found')
  }
  const merged = [
    ...Array.from(bestSolution.seeds),
    ...Array.from(bestSolution.nodes),
  ]
  merged.sort((a, b) => {
    const [c1, d1, m1] = a.split('-').reverse()
    const [c2, d2, m2] = b.split('-').reverse()

    if (c1 !== c2) {
      return c1.localeCompare(c2)
    } else if (d1 !== d2) {
      return d1.localeCompare(d2)
    } else {
      return m1.localeCompare(m2)
    }
  })
  return merged
}

function getInitState(target: string | number): StudyPathState {
  const clusterTarget = tartGetStudyPath[target]
  if (!clusterTarget) {
    throw new Error('Invalid target')
  }
  return {
    seeds: new Set<string | number>(clusterTarget.members),
    nodes: new Set<string | number>(),
    time: 0,
  }
}

const KEEP_BEST_ALLEN = 7
const RANDOM_ALLEN = 3

function evolvePopulation(
  population: MinHeap<StudyPathState>
): StudyPathState[] {
  const keepState = population.getNsmallest(KEEP_BEST_ALLEN)
  const randomState = population.getNrandom(RANDOM_ALLEN)
  return keepState.concat(randomState)
}

function generateState(
  state: StudyPathState,
  limitTime: number,
  population: MinHeap<StudyPathState>,
  solution: StudyPathState[]
): boolean {
  const { seeds } = state
  let hasNewGeneration = false
  for (const seed of seeds) {
    const nextNodes = studyPath[seed]?.parent
    if (nextNodes && nextNodes.length)
      for (const nextNode of nextNodes) {
        const newState = cloneDeep(state)
        newState.seeds.delete(seed)
        newState.nodes.add(seed)
        newState.time += studyPath[seed]?.time || 0
        if (!newState.nodes.has(nextNode)) {
          newState.seeds.add(nextNode)
        }
        if (newState.time > limitTime) continue
        population.insert(newState)
        hasNewGeneration = true
      }
  }
  if (!hasNewGeneration && state.seeds.size < 2) {
    solution.push(state)
  }
  return hasNewGeneration
}

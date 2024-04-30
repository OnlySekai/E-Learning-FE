export interface StudyNodeEntity {
  time: number
  children: string[] | number[]
  parent: string[] | number[]
}

export interface ClusterStudyNode {
  members: string[] | number[]
  point: number
}

export interface StudyPathState {
  seeds: Set<string | number>
  nodes: Set<string | number>
  time: number
}

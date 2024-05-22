export interface CourseReferenceEntity {
  _id: string,
  courseName: string,
  reference: ReferenceEntity[],
}

export interface ReferenceEntity {
  title: string,
  id: string,
  src: string,
  referenceFiles: ReferenceFilesEntity[],
}

export interface ReferenceFilesEntity {
  title: string,
  id: string,
  src: string,
  iframeSrc: string,
}
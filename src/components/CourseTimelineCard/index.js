// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import {
  CourseTitleAndDurationContainer,
  CourseTitle,
  Duration,
  DurationContainer,
  CourseDescription,
  CourseTagsList,
  CourseTagItem,
  CourseTag,
} from './styledComponents'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails
  return (
    <>
      <CourseTitleAndDurationContainer>
        <CourseTitle>{courseTitle}</CourseTitle>
        <DurationContainer>
          <AiFillClockCircle />
          <Duration>{duration}</Duration>
        </DurationContainer>
      </CourseTitleAndDurationContainer>
      <CourseDescription>{description}</CourseDescription>
      <CourseTagsList>
        {tagsList.map(tag => (
          <CourseTagItem key={tag.id}>
            <CourseTag>{tag.name}</CourseTag>
          </CourseTagItem>
        ))}
      </CourseTagsList>
    </>
  )
}
export default CourseTimelineCard

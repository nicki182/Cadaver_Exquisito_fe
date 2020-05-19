import{gql} from 'apollo-boost'
const STORY_FULL=gql`
query StoryFull{
storyFull
}
`
const STORY_ADD=gql`
query StoryToAdd($edit:Int!)
{
storyToAdd(edit:$edit)
}
`
const STORY_UPDATE=gql`
mutation StoryUpdate($type:storyInput)
{
storyUpdate(type:$type)
}
`
export {
    STORY_ADD,
    STORY_FULL,
    STORY_UPDATE
}
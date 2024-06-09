# View/Interaction in details

## First things first

The most important and common thing that we need to address is to handle negative case such as error, empty and loading state, so i added:
- GeneralError
- EmptyState
- Custom Loader and Skeleton for each page

Also from technical standpoint, we need to minimize Client Component as best we could to give better FCP time for user

## Nice to have for best experience

It's best to handle network data as fast as possible, so i added prefetch module to get the data ahead of time when user hover or touch on any pagination

## For modularity sake

I separated sidebar layout and hydration provider for anime detail, in case in the future it would be reused for another page that needs the same data or UI
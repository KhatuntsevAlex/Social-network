import { createSelector } from 'reselect'

export const selectUsers = state => state.usersPage.users
export const selectUsersSuper = createSelector(selectUsers, users => users.filter(u => true))
export const selectPageSize = state => state.usersPage.pageSize
export const selectTotalUsersCount = state => state.usersPage.totalUsersCount
export const selectCurrentPage = state => state.usersPage.page
export const selectIsFetching = state => state.usersPage.isFetching
export const selectFollowingInProgress = state => state.usersPage.followingInProgress
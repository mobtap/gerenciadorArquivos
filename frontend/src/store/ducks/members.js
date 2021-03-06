import { createReducer, createActions } from 'reduxsauce'
import immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
    openMembersModal: null,
    closeMembersModal: null,
    getMembersRequest: null,
    getMembersSuccess: ['data']
})

export const MembersTypes = Types
export default Creators

export const INITIAL_STATE = immutable({
    data: [],
    membersModalOpen: false,
})

export const openModal = state => state.merge({ membersModalOpen: true })

export const closeModal = state => state.merge({ membersModalOpen: false })

export const getSuccess = (state, { data }) => state.merge({ data })



export const reducer = createReducer(INITIAL_STATE, {
    [Types.OPEN_MEMBERS_MODAL]: openModal,
    [Types.CLOSE_MEMBERS_MODAL]: closeModal,
    [Types.GET_MEMBERS_SUCCESS]: getSuccess
})
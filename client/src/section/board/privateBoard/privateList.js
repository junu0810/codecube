import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import axios from 'axios'

import './privateList.css'
import Toggle from '../../../components/toggle/toggle'
import DreamButton from './dreamButton'

import { PRIVATE, CONTENT, CONTENT_LINK } from '../hardWord'
import { WAITING_USERS, WAITING_USERS_LINK } from '../hardWord'

const havePostAsHost = (obj) => {
  return obj.host.projectId > 0
}

const PrivateList = ({
  setHasHost,
  hasHost,
  isLoggedIn,
  dashBoardInfo,
  setDashBoardInfo,
  setWishList,
}) => {
  const navigation = useNavigate()

  useEffect(async () => {
    if (!isLoggedIn) {
      navigation('/')
    }
    // TODO: API
    await axios.get('http://localhost:4000/myProjects').then(({ data }) => {
      if (havePostAsHost(data)) {
        setDashBoardInfo(data)
        setHasHost(true)
      } else {
        setWishList(data)
        setHasHost(false)
      }
    })
  }, [isLoggedIn])

  return (
    <>
      <DreamButton
        hasHost={hasHost}
        postState={dashBoardInfo.host.start + dashBoardInfo.host.done}
      />
      {hasHost ? (
        <Toggle
          leftName={CONTENT}
          rightName={WAITING_USERS}
          leftLink={CONTENT_LINK}
          rightLink={WAITING_USERS_LINK}
          privateClass={PRIVATE}
        ></Toggle>
      ) : null}
      <div id="private-wrapper">
        <Outlet />
      </div>
    </>
  )
}

export default PrivateList

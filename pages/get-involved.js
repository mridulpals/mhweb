import React from 'react'
import { getinvolvedData } from '../data/getinvolvedData';
import PageLayout from "../components/pageLayout/PageLayout";

export default function getinvolved() {
  return (
    <>
      <PageLayout pageData={getinvolvedData} pageHeading={'Get Involved'} />
    </>
  )
}

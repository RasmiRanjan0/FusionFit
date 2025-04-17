import React from 'react'
import MembershipsHero from '../components/Memberships/MembershipsHero'
import MembershipsPricingPlan from '../components/Memberships/MembershipsPricingPlan'
import Benefits from '../components/Memberships/Benefits'

const Memberships = () => {
  return (
    <section>
        <MembershipsHero/>
        <MembershipsPricingPlan/>
        <Benefits/>
    </section>
  )
}

export default Memberships
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Content from '../pages/Content'
import Activity from '../pages/Activity'
import Pravozashitnaya from '../pages/Activity/Pravozashitnaya'
import PravoPractics from '../pages/Activity/PravoPractics'
import Medicinskaya from '../pages/Activity/Medicinskaya'
import MedicalBuro from '../pages/Activity/MedicalBuro'
import LegalBoard from '../pages/Activity/LegalBoard'
import JuvenileBoard from '../pages/Activity/JuvenileBoard'
import Interethnic from '../pages/Activity/Interethnic'
import MilitaryBoard from '../pages/Activity/MilitaryBoard'
import Board from '../pages/Activity/Board'
import Acts from '../pages/Activity/Acts'
import ArbitrationProceedings from '../pages/Activity/ArbitrationProceedings'
import ConstructionExpertise from '../pages/Activity/ConstructionExpertise'
import PropalRebenok from '../pages/Activity/PropalRebenok'
import Friendship from '../pages/Activity/Friendship'
import MysliVsluh from '../pages/Activity/MysliVsluh'
import KonecBudet from '../pages/Activity/KonecBudet'
import SosPrezumpcii from '../pages/Activity/SosPrezumpcii'
import Prokrustovo from '../pages/Activity/Prokrustovo'
import LatestNews from '../pages/Content/Sidebar/LatestNews'
import Contacts from '../pages/Contacts'

function Router (props) {
  return (
    <Routes>
      <Route path="/" element={<Content />}/>
      <Route path="/activity" element={<Activity />}/>
      <Route path="/activity/pravo" element={<Pravozashitnaya />}/>
      <Route path="/activity/pravo/practics" element={<PravoPractics />}/>
      <Route path="/activity/medic" element={<Medicinskaya />}/>
      <Route path="/activity/medic/buro" element={<MedicalBuro />}/>
      <Route path="/board/legal" element={<LegalBoard />}/>
      <Route path="/board/juvenile" element={<JuvenileBoard />}/>
      <Route path="/board/interethnic" element={<Interethnic />}/>
      <Route path="/board/military" element={<MilitaryBoard />}/>
      <Route path="/board" element={<Board />}/>
      <Route path="/akti" element={<Acts />}/>
      <Route path="/arbitration-proceedings" element={<ArbitrationProceedings />}/>
      <Route path="/construction-expertise" element={<ConstructionExpertise />}/>
      <Route path="/propal_rebenok" element={<PropalRebenok />}/>
      <Route path="/frendship" element={<Friendship />}/>
      <Route path="/mysli_vsluh" element={<MysliVsluh />}/>
      <Route path="/konec_budet" element={<KonecBudet />}/>
      <Route path="/sos_prezumpcii_nevinovnosti" element={<SosPrezumpcii />}/>
      <Route path="/prokrustovo_lozhe" element={<Prokrustovo />}/>
      <Route path="/latest_news" element={<LatestNews />}/>
      <Route path="/contacts" element={<Contacts />}/>
    </Routes>
  )
}

export default Router
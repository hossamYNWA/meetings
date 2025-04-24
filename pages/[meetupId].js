import { useRouter } from "next/router"
import MeetUpDetails from "../components/meetings/meetUpDetails"
export default function meetupPage({params}){

    const router = useRouter()
    const meetupID = router.query.meetupId
    return<>
    <MeetUpDetails id={meetupID}/>
    </>
}
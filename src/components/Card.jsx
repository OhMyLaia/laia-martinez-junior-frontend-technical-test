import { getTrackColour } from "../utils/getTrackColour";
import { BsClock } from "react-icons/bs";
import PrimaryButton from "./PrimaryButton";
import { useSchedule } from "../context/ScheduleContext";

function Card({ session }) {

    // const [isAttending, setIsAttending] = useState(false);
    const { sessionIds, add, remove } = useSchedule();

    const isAttending = sessionIds.includes(session.id);

    const toggleSchedule = (session) => {

        if (isAttending) {
            remove(session.id);

        } else {
            add(session.id);
        }
    }


    return (
        <div>

        </div>
    )
}

export default Card
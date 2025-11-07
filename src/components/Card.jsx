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
            <div>
                <div>
                    <h3 className="font-bold">{session.title ? session.title : ''}</h3>
                    <p>{session.speaker}</p>
                    <p>Starts at: {new Date(session.startsAt).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: false // avoids am/pm stuff
                    })}h</p>
                    <div>
                        <BsClock></BsClock>
                        <p>{session.durationMins} min</p>
                    </div>
                </div>
                <div>
                    <PrimaryButton
                        onClick={() => toggleSchedule(session)}
                        children={isAttending ? "Remove" : "Add"}
                    />
                </div>
            </div>
            <aside>
                <p>{session.track}</p>
            </aside>
        </div>
    )
}

export default Card
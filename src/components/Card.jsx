import { getTrackColour } from "../utils/getTrackColour";
import { BsClock } from "react-icons/bs";
import PrimaryButton from "./PrimaryButton";
import { useSchedule } from "../context/ScheduleContext";

function Card({ session }) {

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
        <div className='flex flex-row h-52 gap-3 bg-white rounded-br-4xl rounded-xl p-3
        justify-between shadow-lg hover:scale-102 transition-transform 
        duration-300 
        ease-in-out'>
            <div className=' flex flex-col w-2/3'>
                <div className="grow">
                    <h3 className="font-bold">{session.title ? session.title : ''}</h3>
                    <p>{session.speaker}</p>
                    <p>Starts at: {new Date(session.startsAt).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: false // avoids am/pm stuff
                    })}h</p>
                    <div className="flex flex-row items-center gap-x-2">
                        <BsClock></BsClock>
                        <p>{session.durationMins} min</p>
                    </div>
                </div>
                <div className="flex flex-col items-start">
                    <PrimaryButton
                        onClick={() => toggleSchedule(session)}
                        children={isAttending ? "Remove" : "Add"}
                        className={isAttending ? "bg-red-500 hover:bg-red-700 text-white" : "bg-violet-500 hover:bg-violet-700 text-white"}
                    />
                </div>
            </div>
            <aside className='justify-end items-end text-center w-fit'>
                <p className={`${getTrackColour(session.track)} text-black rounded-full py-2 px-4`}>{session.track}</p>
            </aside>

        </div>
    )
}

export default Card
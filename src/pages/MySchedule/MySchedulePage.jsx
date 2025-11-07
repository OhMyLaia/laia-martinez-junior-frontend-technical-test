import { SESSIONS } from "../../api";
import { useSchedule } from "../../context/ScheduleContext";
import Card from "../../components/Card";
import CardList from "../../components/CardList";
import { useState } from "react";
import PrimaryButton from "../../components/PrimaryButton";


function MySchedulePage() {

    const { sessionIds } = useSchedule();
    const [isSorted, setIsSorted] = useState(false);

    // we keep the ones included in sessionIds array too
    // so we itereate real time data
    const scheduledSessions = SESSIONS.filter(session =>
        sessionIds.includes(session.id)
    );

    const sessionsToDisplay = isSorted
        ? [...scheduledSessions].sort((a, b) => new Date(b.startsAt) - new Date(a.startsAt))
        : scheduledSessions;

        const toggleSort = () => {
            setIsSorted(prev => !prev);
        }

    return (
        <main className='m-5'>
            <h2 className='text-3xl'>My scheduled sessions</h2>
            <p className='text-xl'>You have {sessionIds.length} upcoming {`${sessionIds.length === 1 ? "session" : "sessions"} `}</p>
            <PrimaryButton
                onClick={toggleSort}
                className="text-black bg-violet-200 w-fit"
            >
                {isSorted ? "Descending order" : "Ascending order"}
            </PrimaryButton>
            <CardList>
                {sessionsToDisplay.map(session => (
                    <Card
                        key={session.id}
                        session={session}
                    />
                ))}
            </CardList>
        </main>
    )
}

export default MySchedulePage
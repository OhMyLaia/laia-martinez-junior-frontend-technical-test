import { SESSIONS } from "../../api";
import { useSchedule } from "../../context/ScheduleContext";
import Card from "../../components/Card";
import CardList from "../../components/CardList";


function MySchedulePage() {

    const { sessionIds } = useSchedule();

    // we keep the ones included in sessionIds array too
    // so we itereate real time data
    const scheduledSessions = SESSIONS.filter(session =>
        sessionIds.includes(session.id)
    );

    return (
        <main className='m-5'>
            <h2 className='text-3xl'>My scheduled sessions</h2>
            <p className='text-xl'>You have {sessionIds.length} upcoming {`${sessionIds.length === 1 ? "session" : "sessions"} `}</p>
            <CardList>
                {scheduledSessions.map(session => (
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
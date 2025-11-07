
import Card from '../../components/Card.jsx'
import { SESSIONS, searchSessions } from '../../api.js'
import CardList from '../../components/CardList.jsx';
import { BiSearch } from 'react-icons/bi';
import { useState, useEffect } from 'react';

function HomePage() {

    const [filteredSessions, setFilteredSessions] = useState(SESSIONS);

    return (
        <main className='m-5'>
            <CardList>
                {filteredSessions.map(session => (
                    <Card
                    key={session.id}
                    session={session}
                    />
                ))}
            </CardList>
        </main>
    )
}

export default HomePage
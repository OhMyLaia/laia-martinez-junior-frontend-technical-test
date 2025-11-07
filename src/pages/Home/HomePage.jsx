
import Card from '../../components/Card.jsx'
import { SESSIONS, searchSessions } from '../../api.js'
import CardList from '../../components/CardList.jsx';
import { BiSearch } from 'react-icons/bi';
import { useState, useEffect } from 'react';

function HomePage() {

    const [filteredSessions, setFilteredSessions] = useState(SESSIONS);
    const [query, setQuery] = useState("");

    const handleSearch = async (e) => {
        const newQuery = e.target.value;
        setQuery(newQuery);
        const sessionsByQuery = await searchSessions(newQuery);
        setFilteredSessions(sessionsByQuery);
    }

    useEffect(() => {
        return () => {
            setQuery("");
        };
    }, []);

    return (
        <main className='m-5'>
            <div className='ms-5 flex flex-row w-full justify-start items-center gap-x-2'>
                <label></label>
                <BiSearch/>
                <input value={query}
                onChange={handleSearch}
                className='p-1 w-[80%] md:w-1/2 border-violet-400 rounded-xl bg-violet-100' placeholder='Search by title, track or speaker...'></input>
            </div>
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
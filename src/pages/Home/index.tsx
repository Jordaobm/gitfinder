import React, { useCallback, useContext, useState } from 'react';
import { Container, SpanError, Apresentation, TextApresentation, InputSearch, Image, InfoUser, Login, Location, ImagePerfil, Cards, } from './styles';
import git from '../../assets/git.png'
import { FiChevronRight, FiMoon, FiSearch, FiSun } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { useProfile } from '../../hooks/profiles';
import { Profile } from '../../dtos/types';
import Switch from "react-switch";
import { motion } from "framer-motion"

import { useContextTheme } from '../../hooks/theme';
import { ThemeContext } from 'styled-components';
import { Name, Card } from '../../styles/global';

const Home: React.FC = () => {

    const { title } = useContext(ThemeContext);

    const { toggleTheme } = useContextTheme();

    const [name, setName] = useState('');

    const [errorInput, setErrorInput] = useState(false);

    const { setProfile, profileState, setRepositories } = useProfile();

    const searchProfiles = useCallback(async (name: string) => {
        if (name !== '') {
            await api.get(`/users/${name}`).then(response => {
                setProfile(response.data)
                api.get(`/users/${name}/repos`).then(response => {
                    setRepositories(response.data)
                })
                setErrorInput(false)
            }).catch(response => {
                setProfile({} as Profile)
                setErrorInput(true)
            })
            return;
        }
        setErrorInput(true)
        setProfile({} as Profile)
        setRepositories([])

    }, [setProfile, setRepositories])

    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }

    return (
        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={variants}
                        >
        <Container>
            <Apresentation>
                <TextApresentation>
                    <Switch
                        color="#F7F7F7"

                        checked={title === 'dark'}
                        onChange={toggleTheme}
                        height={10}
                        width={40}
                        checkedIcon={false}
                        uncheckedIcon={false}
                        handleDiameter={20}
                        onColor="#494949"
                        offColor="#d1d1d1"
                    ></Switch>
                    <h1>Explore e encontre perfis no github</h1>
                </TextApresentation>
                <InputSearch err={errorInput}>
                    <input type='text' placeholder='Busque por usuário' onChange={(e) => setName(e.target.value)} />
                    <button onClick={() => searchProfiles(name)}><FiSearch size={25} /><p>Pesquisar</p></button>
                </InputSearch>

                <Cards>
                    {errorInput && <SpanError>Usuário não encontrado!</SpanError>}
                    {profileState.name &&
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={variants}
                        >
                            <Card>
                                <ImagePerfil src={profileState.avatar_url} />
                                <InfoUser>
                                    <Name>{profileState.name}</Name>
                                    <Login>{profileState.login}</Login>
                                    <Location>{profileState.location}</Location>
                                </InfoUser>
                                <Link to='/user'><FiChevronRight size={30} /></Link>
                            </Card>
                        </motion.div>}
                </Cards>
            </Apresentation>
            <Image>
                <img src={git} />
            </Image>

        </Container>
        </motion.div>
    )
}

export default Home
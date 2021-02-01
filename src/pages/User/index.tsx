import React, { useContext } from 'react';
import { Content, Container, ContentCardRepo, Followers, Following, Image, Info, Location, Login, OtherInfo, Repos, UserProfile, CreateDate, Language, UpdateDate, Dates, Header } from './styles';
import image from '../../assets/git.png';
import { useProfile } from '../../hooks/profiles';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { GoBack, Name, CardRepo, RepoName, Error } from '../../styles/global';
import Switch from "react-switch";

import { useContextTheme } from '../../hooks/theme';
import { ThemeContext } from 'styled-components';
import { formatDate } from '../../utils/date';
import { motion } from "framer-motion"

const User: React.FC = () => {
    const { profileState, repositoriesState } = useProfile();

    const { title } = useContext(ThemeContext);

    const { toggleTheme } = useContextTheme();

    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }

    if (profileState.name !== undefined) {

        return (
            <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
            >
                <Container>
                    <Header>
                        <GoBack>
                            <Link to='/'><FiChevronLeft size={30} style={{ backgroundColor: 'transparent' }} /></Link>
                        </GoBack>
                        <Switch
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
                    </Header>
                    <UserProfile>
                        <Image src={profileState.avatar_url} />
                        <Info>
                            <Name>{profileState.name}</Name>
                            <Login>{profileState.login}</Login>
                            <Location>{profileState.location}</Location>
                        </Info>
                        <OtherInfo>
                            <Repos>
                                <a target="_blank" href={`https://github.com/${profileState.login}?tab=repositories`}>
                                    <p>{profileState.public_repos}</p>
                                    <h5>Repositórios</h5>
                                </a>
                            </Repos>
                            <Followers>
                                <a target="_blank" href={`https://github.com/${profileState.login}?tab=followers`}>
                                    <p>{profileState.followers}</p>
                                    <h5>Seguidores</h5>
                                </a>
                            </Followers>
                            <Following>
                                <a target="_blank" href={`https://github.com/${profileState.login}?tab=following`}>
                                    <p>{profileState.following}</p>
                                    <h5>Seguindo</h5>
                                </a>
                            </Following>
                        </OtherInfo>
                    </UserProfile>

                    <ContentCardRepo>
                        {repositoriesState && repositoriesState.map(repo => (
                            <CardRepo key={repo.name}>
                                <div>
                                    <RepoName>{repo.name}</RepoName>
                                    <Language>{repo.language}</Language>
                                    <Dates>
                                        <CreateDate>Criado em: {formatDate(repo.created_at)}</CreateDate>
                                        <UpdateDate>Ultima edição: {formatDate(repo.updated_at)}</UpdateDate>
                                    </Dates>
                                </div>
                                <a target="_blank" href={repo.html_url}><FiChevronRight size={30} style={{ backgroundColor: 'transparent' }} /></a>

                            </CardRepo>
                        ))}

                    </ContentCardRepo>

                </Container>
            </motion.div>
        )
    }

    return (
        <Container>
            <Content>
                <Error>
                    <h5>Oops, alguma coisa não está certa</h5>
                    <p>Você não fez a busca de perfis. Por favor volte à página inicial, faça uma busca e clique no perfil para acessar mais informações!</p>
                    <Link to='/'><FiChevronLeft size={30} /><p>Retornar</p></Link>
                </Error>
                <img src={image} />
            </Content>
        </Container>
    )
}

export default User;
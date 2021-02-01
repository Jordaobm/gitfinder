import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import {Profile, Repositories} from '../dtos/types';



interface ProfileContextData {
  setProfile(profile: Profile): void;
  profileState:Profile;

  setRepositories(repositories:Repositories[]):void;
  repositoriesState:Repositories[];
}

const ProfileContext = createContext<ProfileContextData>({} as ProfileContextData)

const ProfileProvider: React.FC = ({ children }) => {

  const [profileState, setProfileState] = useState<Profile>(()=>{
    const localProfiles = localStorage.getItem('@gitfinder:profileState');

    if(localProfiles){
      const parsed = JSON.parse(localProfiles);
      return parsed;
    }
   return {};
  });
  
  const setProfile = useCallback((profile:Profile)=>{
    setProfileState(profile);
  },[])

  const [repositoriesState, setRepositoriesState] = useState<Repositories[]>(()=>{
    const localRepositories = localStorage.getItem('@gitfinder:repositories');
    if(localRepositories){
      const parsed = JSON.parse(localRepositories);
      return parsed;
    }
    return [];
  })

  const setRepositories = useCallback((repositories:Repositories[])=>{
    setRepositoriesState(repositories)
  },[])

  localStorage.setItem('@gitfinder:profileState', JSON.stringify(profileState))

  localStorage.setItem('@gitfinder:repositories', JSON.stringify(repositoriesState))

  return (
    <ProfileContext.Provider value={{ setProfile, profileState, repositoriesState, setRepositories }}>{children}</ProfileContext.Provider>
  );
}

function useProfile():ProfileContextData {
  const context = useContext(ProfileContext);
  return context
}

export {useProfile, ProfileProvider}
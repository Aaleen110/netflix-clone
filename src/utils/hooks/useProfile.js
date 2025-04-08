import { useState, useEffect } from 'react';
import { STORAGE_KEYS } from '../constants';

export const useProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const selectedProfile = await localStorage.getItem(STORAGE_KEYS.SELECTED_PROFILE);
        if (selectedProfile) {
          setProfile(JSON.parse(selectedProfile));
        }
      } catch (error) {
        console.error('Error retrieving profile:', error);
      } finally {
        setLoading(false);
      }
    };

    getProfile();
  }, []);

  return { profile, loading };
};

import { createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../../common/api';

export const fetchTeams = createAsyncThunk(
  'teams/setTeams',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get('/teams');

      return data;
    } catch (err) {
      return rejectWithValue(null);
    }
  }
);

export const fetchCurrentTeam = createAsyncThunk(
  'teams/setCurrentTeam',
  async (teamId, { rejectWithValue }) => {
    try {
      const { data } = await api.get(`/team/sr:team:${teamId}`);

      return data;
    } catch (err) {
      return rejectWithValue(null);
    }
  }
);

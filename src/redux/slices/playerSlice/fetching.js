import { createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../../common/api';

export const fetchLastPlayerStats = createAsyncThunk('players/setPlayerProfile',
  async (playerId, { rejectWithValue }) => {
    try {
      const { data } = await api.get(`playerStats/${playerId}`);

      return data;
    } catch (err) {
      return rejectWithValue(null);
    }
  }
);

export const fetchSearchPlayers = createAsyncThunk('players/searchPlayers',
  async (search, { rejectWithValue }) => {
    try {
      const { data } = await api.get(`players?search=${search}`);

      return data;
    } catch (err) {
      return rejectWithValue(null);
    }
  }
);
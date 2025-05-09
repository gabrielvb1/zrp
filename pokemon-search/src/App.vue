<template>
  <div class="container">
    <h1>Busca Pokémon</h1>
    <div class="search-container">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Digite o nome do Pokémon (ex.: pikachu)"
      />
      <button :disabled="loading" @click="searchPokemon">
        {{ loading ? 'Carregando...' : 'Buscar' }}
      </button>
    </div>
    <div v-if="loading">Carregando...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else-if="pokemon">
      <h2>{{ pokemon.name }}</h2>
      <h3>Habilidades:</h3>
      <ul>
        <li v-for="ability in pokemon.abilities" :key="ability.ability.name">
          {{ ability.ability.name }}
        </li>
      </ul>
    </div>
    <div v-else-if="hasSearched && searchQuery && !pokemon">Pokémon não encontrado</div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs, watch } from 'vue';
import axios from 'axios';

export default defineComponent({
  setup() {

    const state = reactive({
      searchQuery: '',
      pokemon: null,
      loading: false,
      error: null,
      hasSearched: false,
    });

    const capitalize = (str) => {
      if (!str) return str;
      return str.charAt(0).toUpperCase() + str.slice(1);
    };

    watch(
      () => state.searchQuery,
      () => {
        state.hasSearched = false;
        state.pokemon = null;
        state.error = null;
      }
    );

    const searchPokemon = async () => {
      if (!state.searchQuery.trim()) {
        state.pokemon = null;
        state.error = null;
        state.hasSearched = false;
        return;
      }

      state.loading = true;
      state.error = null;
      state.pokemon = null;
      state.hasSearched = false;

      try {
        const response = await axios.get(
          `http://localhost:3030/pokemon/${state.searchQuery.toLowerCase()}`
        );
        state.pokemon = {
          ...response.data,
          name: capitalize(response.data.name),
        };
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 404) {
          state.pokemon = null;
        } else {
          state.error = 'Erro ao buscar Pokémon. Tente novamente.';
        }
      } finally {
        state.loading = false;
        state.hasSearched = true;
      }
    };

    return {
      ...toRefs(state),
      searchPokemon,
    };
  },
});
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
}

.search-container {
  display: flex;
  gap: 10px;
  margin: 10px 0;
}

input {
  flex: 1;
  padding: 10px;
  font-size: 16px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  background-color: #6c757d;
  cursor: not-allowed;
}

.error {
  color: red;
  text-align: center;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 5px 0;
}

li span {
  color: gray;
  font-size: 0.9em;
}
</style>
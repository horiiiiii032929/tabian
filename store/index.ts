import { defineStore } from 'pinia'
import { API, graphqlOperation } from 'aws-amplify'
import * as API_SCHEMA from '~/types/API'
import * as queries from '~/graphql/queries'
import * as mutations from '~/graphql/mutations'
import { GraphQLResult as _GraphQLResult } from '@aws-amplify/api-graphql'

type GraphQLResult<T> = _GraphQLResult<T>

export const useStore = defineStore('app', {
  state: () => ({
    _loading: false,
    _listRandomChoicesRes: [] as API_SCHEMA.randomChoice[],
    _createRandomChoicesRes: {} as API_SCHEMA.randomChoice,
  }),
  getters: {
    loading: (state) => state._loading,
    listRandomChoicesRes: (state) => state._listRandomChoicesRes,
  },
  actions: {
    async getListRandomChoicesRes() {
      try {
        this._loading = true
        const res = (await API.graphql(
          graphqlOperation(queries.listRandomChoices)
        )) as GraphQLResult<API_SCHEMA.ListRandomChoicesQuery>
        this._listRandomChoicesRes = res.data?.listRandomChoices
          ?.items as API_SCHEMA.randomChoice[]
      } catch (err) {
      } finally {
        this._loading = false
      }
    },
    async createRandomChoice(args: API_SCHEMA.CreateRandomChoiceInput) {
      try {
        this._loading = true
        const res = (await API.graphql(
          graphqlOperation(mutations.createRandomChoice, { input: args })
        )) as GraphQLResult<API_SCHEMA.CreateRandomChoiceMutation>
        this._createRandomChoicesRes = res.data
          ?.createRandomChoice as API_SCHEMA.randomChoice
      } finally {
        this._loading = false
      }
    },
  },
})

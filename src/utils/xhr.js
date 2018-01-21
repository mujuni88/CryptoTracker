import axios from 'axios'
import {apiBaseURL as baseURL} from './constants'

const xhr = axios.create({
  baseURL
})

export default xhr

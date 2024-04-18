import { APIError } from './errors/APIError'
import { type BattleLog, type Brawler, type Brawlers, type Club, type ClubMember, type ClubMembers, type Player } from './types'

export class BrawlNet {
    token: string

    constructor(token: string) {
        this.token = token
    }

    async request<T>(endpoint: string) {
        const res = await fetch(`https://api.brawlstars.com/v1/${endpoint}`, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                "Authorization": `Bearer ${this.token}`
            }
        })
        if(!res.ok) throw new APIError(res.status)

        const data = await res.json()
    
        return data as T
    }

    /**
     * fetch user account by tag from game.
     * @param {string} tag from game 
     */
    async fetchPlayer(tag: string) {
        const response = await this.request<Player>(`players/%23${tag}`)

        return response
    }
    
    /**
     * fetch user battle log by tag from game.
     * @param {string} tag from game 
     */
    async fetchPlayerLog(tag: string) {
        const response = await this.request<BattleLog>(`players/%23${tag}/battlelog`)

        return response
    }
    
    /**
     * fetch brawler by id from game.
     */
    async fetchBrawler(brawlerId: number) {
        const response = await this.request<Brawler>(`brawlers/${brawlerId}`)

        return response
    }

    /**
     * fetch brawlers list.
     */
    async fetchBrawlers() {
        const response = await this.request<Brawlers>("brawlers")

        return response
    }

    /**
     * fetch club by tag from game.
     * @param {string} tag from game 
     */
    async fetchClub(clubTag: string) {
        const response = await this.request<Club>(`clubs/%23${clubTag}`)

        return response
    }

    /**
     * fetch club members by tag from game.
     * @param {string} tag from game 
     */
    async fetchClubMembers(clubTag: string) {
        const response = await this.request<ClubMembers>(`clubs/%23${clubTag}/members`)

        return response
    }
}
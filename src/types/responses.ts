export interface Player {
    tag: string,
    name: string,
    nameColor: string,
    icon: PlayerIcon,
    trophies: number,
    highestTrophies: number,
    expLevel: number,
    expPoints: number,
    isQualifiedFromChampionshipChallenge: boolean,
    '3vs3Victories': number,
    soloVictories: number,
    duoVictories: number,
    bestRoboRumbleTime: number,
    bestTimeAsBigBrawler: number,
    club: PlayerRankingClub,
    brawlers: Brawler[]
}

export interface PlayerIcon {
    id: number
}

export interface PlayerRankingClub {
    tag: string,
    name: string
}

export interface Brawler {
    id: number,
    name: string,
    power: number,
    rank: number,
    trophies: number,
    highestTrophies: number,
    gadgets: Gadget[],
    starPowers: StarPower[]
    gears: GearInfo[],
}

export interface Brawlers {
    items: Brawler[]
}

export interface ClubMember {
    tag: string,
    name: string,
    nameColor: string,
    role: string,
    trophies: number,
    icon: PlayerIcon
}

export interface ClubMembers {
    items: ClubMember[]
}

export interface Club {
    tag: string,
    name: string,
    description: string,
    type: string,
    badgeId: number,
    requiredTrophies: number,
    trophies: number,
    members: ClubMember[]
}

export interface Gadget {
    id: number,
    name: string
}

export interface StarPower {
    id: number,
    name: string
}

export interface GearInfo {
    name: string,
    id: number,
    level: number
}

export interface BattleLog {
    items: Battle[]
}

export interface Battle {
    battleTime: string,
    event: Event,
    battle: BattleResult
}

export interface BattleResult {
    mode: string,
    type: string,
    trophyChange: number,
    result: string,
    duration: number,
    starPlayer: StarPlayer,
    teams: [TeamPlayer[]]
}

export interface StarPlayer {
    tag: string,
    name: string,
    bralwer: Brawler
}

export interface TeamPlayerBrawler {
    id: number,
    name: string,
    power: number,
    trophies: number
}

export interface TeamPlayer {
    tag: string,
    name: string,
    brawler: TeamPlayerBrawler
}

export interface Event {
    id: number,
    mode: string,
    map: string
}

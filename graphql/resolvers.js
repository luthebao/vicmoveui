

export const resolvers = {
    Query: {
        account: async (parent, agrs, ctx) => await ctx.prisma.accountfuturekings.findFirst({
            where: {
                adress: agrs.address.toLowerCase()
            }
        }),
        clans: async (parent, agrs, ctx) => {
            const max = 20
            const page = agrs.page || 1
            const results = await ctx.prisma.clansfuturekings.findMany({
                orderBy: [
                    {
                        defender: 'desc',
                    },
                ],
                take: max,
                skip: (page - 1) * max
            })
            return results
        },
        clan: async (parent, agrs, ctx) => await ctx.prisma.clansfuturekings.findFirst({
            where: {
                id: agrs.id
            }
        }),
        wods: async (parent, agrs, ctx) => (await ctx.prisma.deathorlivewar.findMany({
            where: {
                NOT: {
                    slug: {
                        equals: "test"
                    }
                }
            }
        })).sort((a, b) => b.id - a.id).sort((a, b) => {
            return ["running", "waiting", "end"].indexOf(a.status) - ["running", "waiting", "end"].indexOf(b.status)
        }),
        wod: async (parent, agrs, ctx) => {
            return await ctx.prisma.deathorlivewar.findFirst({ where: { slug: agrs.id } })
        },
        config: async (parent, agrs, ctx) => await ctx.prisma.config.findFirst({
            where: {
                id: 0
            }
        }),
        logintoken: async (parent, agrs, ctx) => {
            if (agrs.token) {
                try {
                    const config = await ctx.prisma.config.findFirst({
                        where: {
                            id: 0
                        }
                    })
                    const address = await ethers.utils.verifyMessage(config.signMessage, agrs.token);
                    const dateNow = new Date()
                    const result = await ctx.prisma.login_token.findFirst({
                        where: {
                            exprieAt: {
                                gte: dateNow
                            },
                            address: address.toLowerCase()
                        }
                    })
                    if (result) {
                        result.accid = Number(result.accid)
                        result.id = Number(result.id)
                    }
                    return result
                } catch {
                    return null
                }
            }
            else if (agrs.auth) {
                const result = await ctx.prisma.login_token.findFirst({
                    where: {
                        exprieAt: {
                            gte: new Date()
                        },
                        token: agrs.auth
                    }
                })
                if (result) {
                    result.accid = Number(result.accid)
                    result.id = Number(result.id)
                }
                return result
            } else return null
        },
        accfromref: async (parent, agrs, ctx) => await ctx.prisma.accountfuturekings.findFirst({
            where: {
                refCode: agrs.refCode
            }
        }),
        guarantee: async (parent, agrs, ctx) => await ctx.prisma.accountfuturekings.findMany({
            where: {
                guardianId: agrs.id
            }
        }),
        invitebox: async (parent, agrs, ctx) => await ctx.prisma.accountfuturekings.findMany({
            where: {
                registercode: agrs.address
            }
        }),
        lastAttack: async (parent, agrs, ctx) => await ctx.prisma.attackrecordfuturekings.findMany({
            where: {
                address: agrs.address.toLowerCase(),
            },
            take: 1,
            orderBy: {
                id: 'desc'
            }
        }),
        airdrop: async (parent, agrs, ctx) => await ctx.prisma.airdrop_campaign.findFirst({
            where: {
                slug: agrs.slug,
            },
        }),
        airdroprecord: async (parent, agrs, ctx) => await ctx.prisma.airdrop_record.findFirst({
            where: {
                campaignId: agrs.id,
                accid: agrs.accid
            },
        }),
    },
}
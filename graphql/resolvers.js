const jwt = require('jsonwebtoken');
// import { PrismaClient } from "@prisma/client"
// const prisma = new PrismaClient()

const secret_jwt = "bao*&^234dep)@$38@6trai!#5@55@"

const admins = [
    'luthebao1997@gmail.com',
    'vytiendung@gmail.com',
    'tonytran.etheking@gmail.com',
    'dungta.tad@gmail.com',
    'leanhminh1997@gmail.com',
    'lehoanganh7497@gmail.com',
    'hoainamhotline@gmail.com',
]

export const resolvers = {
    Query: {
        accountinfo: async (parent, agrs, ctx) => await ctx.prisma.acc_info.findFirst({
            where: {
                email: agrs.email
            }
        }),
        accountdetail: async (parent, agrs, ctx) => await ctx.prisma.account.findFirst({
            where: {
                id: agrs.id
            }
        }),
        box: async (parent, agrs, ctx) => await ctx.prisma.box.findFirst({
            where: {
                id: agrs.id,
                status: 0,
            }
        }),
        boxs: async (parent, agrs, ctx) => await ctx.prisma.box.findMany({
            where: {
                accid: agrs.accid,
                status: 0,
            }
        }),
        sneaker: async (parent, agrs, ctx) => {
            const rs = await ctx.prisma.shoes.findFirst({
                where: {
                    id: agrs.id
                }
            })
            rs.nftid = Number(rs.nftid)
            return rs
        },
        sneakers: async (parent, agrs, ctx) => {
            const rss = await ctx.prisma.shoes.findMany({
                where: {
                    accid: agrs.accid
                }
            })

            return rss.map(val => {
                val.nftid = Number(val.nftid)
                return val
            })
        },
        config: async (parent, agrs, ctx) => await ctx.prisma.config.findFirst({
            where: {
                id: 1
            }
        }),
        activities: async (parent, agrs, ctx) => {
            try {
                const decoded = jwt.verify(agrs.token, secret_jwt)
                const results = await ctx.prisma.vimlog.findMany({
                    where: {
                        accid: decoded.id,
                    },
                    orderBy: {
                        id: 'desc',
                    },
                    skip: agrs?.page ? (agrs?.page - 1) * (agrs?.size ? agrs?.size : 10) : 0,
                    take: agrs?.size ? agrs?.size : 10
                })
                return results
            } catch (error) {
                return null
            }
        },
        withdraws: async (parent, agrs, ctx) => {
            try {
                const decoded = jwt.verify(agrs.token, secret_jwt)
                const results = await ctx.prisma.withdrawrequest.findMany({
                    where: {
                        accid: decoded.id,
                    },
                    orderBy: {
                        id: 'desc',
                    },
                    take: 5
                })
                return results
            } catch (error) {
                return null
            }
        },
    },
}
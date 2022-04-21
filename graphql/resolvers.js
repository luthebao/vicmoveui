import { PrismaClient } from "@prisma/client"

// const prisma = new PrismaClient()

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
    },
}
FROM node:14-alpine AS builder

WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM node:14-alpine AS runner
WORKDIR /app
COPY . .
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]
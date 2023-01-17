FROM node:16-alpine AS build-stage

WORKDIR /app
COPY . .
RUN npm install && npm run build

# production stage
FROM nginx:1.17-alpine AS production-stage
WORKDIR /app
COPY --from=build-stage /app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]

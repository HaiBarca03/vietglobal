# Bước 1: Build stage
FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files để tận dụng Docker cache cho node_modules
COPY package*.json ./

# Cài đặt toàn bộ dependencies (bao gồm cả devDependencies để build)
RUN npm install

# Copy toàn bộ mã nguồn
COPY . .

# Nếu project là NestJS/TypeScript, lệnh build sẽ tạo ra thư mục /dist
# Nếu project là Express thuần (JS), bạn có thể comment dòng này lại
# RUN npm run build

# Bước 2: Run stage (Làm cho image nhẹ hơn)
FROM node:22-alpine

WORKDIR /app

# Copy các file cần thiết từ builder stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app ./ 

# Port mà app của bạn chạy (local là 3000)
EXPOSE 3000

# Lệnh khởi chạy
# Nếu là Express JS: node index.js
# Nếu là NestJS: node dist/main.js
CMD ["node", "index.js"]
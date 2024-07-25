FROM maven:3.9.2-eclipse-temurin-17-alpine as builder

COPY backend/src src/
COPY backend/pom.xml pom.xml

RUN mvn clean package -DskipTests

FROM eclipse-temurin:17-jre-alpine
COPY --from=builder target/*.jar app.jar
EXPOSE 8080
CMD ["java","-jar","app.jar"]

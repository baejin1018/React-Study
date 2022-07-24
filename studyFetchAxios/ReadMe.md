# CORS 에러

Clent: localhost:3000 (react 개발서버)   
Server: localhost:4000   
이렇게 Client와 Server가 있을때 이 둘의 오리진이 달라서 생기는 오류이다   
`오리진?` host와 port를 포함한 이터의 출처   
오리진이 달라도 데이터를 꺼내갈수 있으면 naver에서 google의 데이터를 막 꺼내갈수 있어 오리진이 다르면 데이터를 꺼내가지 못하게 설정해 놓았다   
Server에서 cors 라이브러리를 이용해 cors 정책을 허용(오리진이 달라도 데이터를 꺼내갈수 있게)할수 있다
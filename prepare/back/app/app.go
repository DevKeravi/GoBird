package app

import "github.com/gin-gonic/gin"

func Run(addr string) {

	router := gin.Default()

	router.Run(addr)
}

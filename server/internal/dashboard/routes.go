package dashboard

import (
	"github.com/gin-gonic/gin"
)

func configureRoutes(g *gin.Engine) {
	g.GET("/api/$RNT/detail", handleSeeuDetail)
}

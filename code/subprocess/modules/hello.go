package main

import (
	"fmt"
	"os"
	"time"
)

func isContinuous() bool {

	for _, e := range os.Args {
		if e == "--continuous" {
			return true
		}
	}
	return false
}

func main() {

	if !isContinuous() {
		fmt.Println("[hello.go] Hello!")
		return
	}
	for {
		fmt.Println("[hello.go] (wait for quit)")
		time.Sleep(1 * time.Second)
	}
}

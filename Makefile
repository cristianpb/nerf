SHELL := /bin/bash

dummy		    := $(shell touch .env)
include ./.env

rclone-install:
	curl -s -O https://downloads.rclone.org/rclone-current-linux-amd64.deb;\
		sudo dpkg -i rclone-current-linux-amd64.deb; \
		rm rclone-*-linux-amd64*;

rclone-delete:
	@rclone delete --rmdirs s3:$$BUCKET/

rclone-purge:
	@rclone purge s3:$$BUCKET

rclone-pull:
	@rclone copy --progress s3:$$BUCKET/ static/

rclone-ls:
	@rclone ls s3:$$BUCKET/

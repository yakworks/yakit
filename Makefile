# check for build/shipkit and clone if not there, this should come first
SHIPKIT_DIR = build/shipkit
$(shell [ ! -e $(SHIPKIT_DIR) ] && git clone -b v1.0.43 https://github.com/yakworks/shipkit.git $(SHIPKIT_DIR) >/dev/null 2>&1)
# Shipkit.make first, which does all the lifting to create makefile.env for the BUILD_VARS
include $(SHIPKIT_DIR)/Shipkit.make
include $(SHIPKIT_DIR)/makefiles/vault.make
include $(SHIPKIT_MAKEFILES)/docker.make
include $(SHIPKIT_MAKEFILES)/git-tools.make
include $(SHIPKIT_MAKEFILES)/ship-version.make
include $(SHIPKIT_MAKEFILES)/circle.make

# -- Variables ---
export BOT_EMAIL ?= 9cibot@9ci.com
lint = npx eslint
jest = npx jest
vite = npx vite
prettier = npx prettier

# --- standard base build ----

node_modules:
	pnpm install

## runs the pnpm install
install: node_modules

## Run the lint and tests, will install if not done already
check: install lint test

## runs both karma and jasmine tests
test: jest

## runs jasmine tests
jest:
	$(jest)

## runs eslint
lint:
	$(prettier) --ignore-path .gitignore --check --plugin-search-dir=. .
	$(lint) --ignore-path .gitignore .

## runs eslint with --fix
lint.fix:
	$(prettier) --ignore-path .gitignore --write --plugin-search-dir=. .

## removes build and test dirs
clean:
	rm -rf dist && rm -rf build

## starts the demo app
start:
	$(vite)

## locally preview production build
start.preview:
	$(vite) preview


clean.dist:
	rm -rf dist/

.PHONY: build
## build prod with vite
build::
	$(vite) build




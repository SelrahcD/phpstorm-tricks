VIDEOS := $(shell find ./src/snippets -name '*.mov' | xargs -I _ echo '"_"')
DIRS := $(dir $(VIDEOS))
GIFS := $(addsuffix example.gif, $(DIRS))
SIZE := 860

.PHONY: rename_mov
rename_mov:
	FULL_FILE_NAME=$($$VIDEOS)
	for FILE in $(VIDEOS); do \
		DIRECTORY=`dirname "$$FILE"`; \
		mv "$$FILE" $$DIRECTORY/example.mov; \
    done

.PHONY: gifs
gifs: $(GIFS)

$(info $(GIFS))

$(GIFS): %/example.gif: $$(%/*.mov)
	/opt/homebrew/bin/ffmpeg -i $?  -vf "fps=10,setpts=0.5*PTS,scale=$(SIZE):-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" -loop 0 $@
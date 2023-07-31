VIDEOS := $(shell find ./src/snippets -name '*.mov')
DIRS := $(dir $(VIDEOS))
GIFS := $(addsuffix example.gif, $(DIRS))
SIZE := 860

.PHONY: gifs
gifs: $(GIFS)

$(GIFS): %/example.gif: $$(%/*.mov)
	/opt/homebrew/bin/ffmpeg -i $?  -vf "fps=10,setpts=0.5*PTS,scale=$(SIZE):-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" -loop 0 $@
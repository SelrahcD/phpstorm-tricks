VIDEOS := $(shell find ./src/snippets -name '*.mov')
DIRS := $(dir $(VIDEOS))
GIFS := $(addsuffix example.gif, $(DIRS))
SIZE := 860

$(info $(GIFS))

.PHONY: gifs
gifs: $(GIFS)

$(GIFS): %/example.gif : %/example.mov
	ffmpeg -y -i $^ -vf "fps=10,setpts=0.5*PTS,scale=860:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" -loop 0 $@

%/example.mov: $(filter-out %/example.mov, %/*.mov)
	mv -- "$?" "$@"
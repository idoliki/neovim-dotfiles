syntax on

set tabstop=3
set softtabstop=3
set shiftwidth=3
set expandtab
set smartindent
set number
set numberwidth=3
set relativenumber
set signcolumn=number
set noswapfile
set nobackup
set undodir=~/.config/nvim/undodir
set undofile
set incsearch
set nohlsearch
set ignorecase
set smartcase
set nowrap
set splitbelow
set splitright
set hidden 
set scrolloff=8
set noshowmode
set updatetime=250
set encoding=UTF-8
set mouse=a

call plug#begin('~/.config/nvim/plugged')
Plug 'windwp/nvim-ts-autotag' " -- For autoclosing tags
Plug 'sainnhe/gruvbox-material' " -- Theme
Plug 'NLKNguyen/papercolor-theme'
Plug 'ryanoasis/vim-devicons' " -- Icons
Plug 'nvim-lua/plenary.nvim' " -- Needed for search & some other plugs
" -- Search
Plug 'nvim-telescope/telescope.nvim'
Plug 'nvim-telescope/telescope-fzf-native.nvim', {'do': 'make'}
Plug 'nvim-telescope/telescope-file-browser.nvim'
Plug 'itchyny/lightline.vim' " -- Show the bottom bar for the vim mode
Plug 'tpope/vim-fugitive' " -- Git commands
Plug 'lewis6991/gitsigns.nvim' " -- Git changes in the file
Plug 'neovim/nvim-lspconfig' " -- LSP Server
" -- Autocompletion
Plug 'hrsh7th/nvim-cmp'
Plug 'hrsh7th/cmp-nvim-lsp'
Plug 'L3MON4D3/LuaSnip'
Plug 'saadparwaiz1/cmp_luasnip'
Plug 'onsails/lspkind-nvim'
Plug 'nvim-treesitter/nvim-treesitter', {'do': ':TSUpdate'} " -- Treesitter, syntax highligh
Plug 'windwp/nvim-ts-autotag' " -- For autoclosing tags
Plug 'preservim/nerdtree' " - File tree
Plug 'tpope/vim-commentary' " - For commenting gcc & gc
Plug 'jose-elias-alvarez/null-ls.nvim' " for formatters and linter
Plug 'akinsho/toggleterm.nvim'
call plug#end()




set background=dark
set termguicolors
" colorscheme gruvbox-material
colorscheme PaperColor

lua require('idoliki')

" remaps
nnoremap <C-p> :Telescope git_files<Cr>
nnoremap <C-f> :Telescope file_browser path=%:p:h<Cr>
" nnoremap <C-f> :NERDTreeFocus<CR>
nnoremap <C-n> :NERDTree<CR>
nnoremap <C-t> :NERDTreeToggle<CR>

" For local replace
nnoremap gr gd[{V%::s/<C-R>///gc<left><left><left>

" For global replace
nnoremap gR gD:%s/<C-R>///gc<left><left><left>

let g:airline_fonts = 1


if !exists('g:airline_symbols')
   let g:airline_symbols = {}
endif

" airline symbols
let g:airline_left_sep = ''
let g:airline_left_alt_sep = ''
let g:airline_right_sep = ''
let g:airline_right_alt_sep = ''
let g:airline_symbols.branch = ''
let g:airline_symbols.readonly = ''
let g:airline_symbols.linenr = ''

" Neoformat -- Prettier setup
" let g:neoformat_try_node_exe = 1
" let g:ale_javascript_prettier_options = '--single-quote --trailing-comma all'
" let g:neoformat_try_formatprg = 1
" autocmd BufWritePre,InsertLeave *.tsx Neoformat
"
" -- Close brackets logic
" # Close brackets automatically, with return
inoremap {<cr> {<cr>}<C-O><S-O>
inoremap (<cr> (<cr>)<c-o><s-o>
inoremap [<cr> [<cr>]<c-o><s-o>
" # Close brackets without return
inoremap ( ()<left>
inoremap { {}<left>
inoremap [ []<left>
" # Two cases below are covered by inoremap <exp>
" inoremap " ""<left>
" inoremap ' ''<left>
" # If you close a bracket that is already closed, it overwrites
inoremap <expr> ) strpart(getline('.'), col('.')-1, 1) == ")" ? "\<Right>" : ")"
inoremap <expr> } strpart(getline('.'), col('.')-1, 1) == "}" ? "\<Right>" : "}"
inoremap <expr> ] strpart(getline('.'), col('.')-1, 1) == "]" ? "\<Right>" : "]"
inoremap <expr> ' strpart(getline('.'), col('.')-1, 1) == "'" ? "\<Right>" : "''<left>"
inoremap <expr> " strpart(getline('.'), col('.')-1, 1) == "\"" ? "\<Right>" : "\"\"<left>"
" # enclose a word in normal mode with "'({[
nnoremap ' mmbi'<esc>ea'<esc>`m<right>
nnoremap " mmbi"<esc>ea"<esc>`m<right>
nnoremap ( mmbi(<esc>ea)<esc>`m<right>
nnoremap { mmbi{<esc>ea}<esc>`m<right>
nnoremap [ mmbi[<esc>ea]<esc>`m<right>
" # enclose a selection in visual mode with "'({[
vnoremap ' <Esc>`<i'<Esc>`>a<right>'<Esc>
vnoremap " <Esc>`<i"<Esc>`>a<right>"<Esc>
vnoremap ( <Esc>`<i(<Esc>`>a<right>)<Esc>
vnoremap { <Esc>`<i{<Esc>`>a<right>}<Esc>
vnoremap [ <Esc>`<i[<Esc>`>a<right>]<Esc>

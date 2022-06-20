local treesitter = require('nvim-treesitter.configs')

treesitter.setup {
   ensure_installed = { "javascript", "typescript", "php", "css", "vim", "vue", "lua", "json", "html", "tsx" },
   autopairs = {
      enable = true
   },
   autotag = {
      enable = true
   },
    highlight = {
        enable = true 
    },
   context_commentstring = {
      enable = true,
      enable_autocmd = false,
     }
}

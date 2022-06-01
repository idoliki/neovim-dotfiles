local telescope = require('telescope')
local finders = require "telescope.finders"

local rg = {"rg", "--line-number", "--column", "", vim.fn.expand("~/.config/nvim/lua")}

local job_opts = {
   entry_maker = function(entry) 
      local _, _, filename, lnum, col, text = string.find(entry, "([^:]+):(%d):(%d+):(.*)")

      local table = {
         ordinal = text,
         display = filename .. ":" .. text

      }

      return table
   end
}

telescope.setup {
   finder = finders.new_oneshot_job(rg, job_opts),
   extensions = {
      file_browser = {
         theme = "ivy",
         -- disables netrw and use telescope-file-browser in its place
         hijack_netrw = true,
         mappings = {
            ['i'] = {

            },
            ['n'] = {

            }
         }
      }
   }
}
telescope.load_extension('fzf')
telescope.load_extension('file_browser')

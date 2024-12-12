#!/usr/bin/python3

import re
import sys

green_color = "\033[1;32m"
red_color = "\033[1;31m"
blue_color = "\033[1;34m"
yellow_color = "\033[1;33m"
reset_color = "\033[0m"

commit_msg_filepath = sys.argv[1]

regex = r"^Aston_js-[1-9]{1} \[(?:feat|fix|chore){1}\]: .{1,}$"

error_msg = (yellow_color + "Commit message must match scheme:\n" +
    reset_color + "Aston_js-N [feat|fix|chore]: commit message\n" +
    "N - number from 1 to 9")

with open(commit_msg_filepath, "r+") as file:
    commit_msg = file.read()
    if re.search(regex, commit_msg):
        print(green_color + "Good Commit!" + reset_color)
    else:
        print(red_color + "Bad commit:\n" + blue_color + commit_msg)
        print(error_msg)
        print(yellow_color + 
            "commit-msg hook failed (add --no-verify to bypass)")
        sys.exit(1)
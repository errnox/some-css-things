require 'daemons/redis_sub'

# Redis does not allow for a client to both, subscribe to a channel and to
# send data to it. So two clients are required.
#
# $redisListener = Redis.new(:host => 'localhost', :port => 6379)
# $redisSender = Redis.new(:host => 'localhost', :port => 6379)

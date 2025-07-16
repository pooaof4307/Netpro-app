import java.util.*;

class Post {
    String user;
    String content;
    int likes;
    int comments;
    Date timestamp;

    public Post(String user, String content, int likes, int comments, Date timestamp) {
        this.user = user;
        this.content = content;
        this.likes = likes;
        this.comments = comments;
        this.timestamp = timestamp;
    }

    public int getScore() {
        return (likes * 2) + comments; // น้ำหนักไลก์ > คอมเมนต์
    }
}

public class PostSorter {
    public static void main(String[] args) {
        List<Post> posts = new ArrayList<>();
        posts.add(new Post("UserA", "ขายไอดี ROV", 12, 4, new Date()));
        posts.add(new Post("UserB", "ไอดี LOL", 4, 1, new Date()));
        posts.add(new Post("UserC", "แจกไอดี Free Fire", 20, 15, new Date()));

        posts.sort((a, b) -> b.getScore() - a.getScore());

        for (Post post : posts) {
            System.out.println(post.user + ": " + post.content + " (Score: " + post.getScore() + ")");
        }
    }
}

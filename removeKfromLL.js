function removeKFromList(l, k) {
    let pt1 = l;
    
    //place pointer on head
    let pt2 = l;
    //place pointer2 on head
    while(pt1) {
        //while pointer exists
    
        if(pt1.value === k) {
            // if that pointer = k do this
            if(pt1 === pt2) {
                // if pt = k and p1 is the same as pointer 2 (while i'm at the start)
                pt2 = pt1.next;
                //take your second finger and move it to the 2nd node
                pt1.next = null; // your first finger is on node 1, now scribble out the next and write null. now you have an l attached to nothing. 
                pt1 = pt2; // now take your first finger and place it with your 2nd finger
                l = pt1; // take your first pointer and attach it to node B
            } else { // this is the case where traveling is going on.
                pt2.next = pt1.next; // take your first finger's destination and move it to your second finger's destination.
                pt1.next = null;
                pt1 = pt2.next; //put your finger on the destination of your second finger.
            }
        } else { // if pointer != k do this
            if(pt1 === pt2) { // if your fingers are together.
                pt1 = pt1.next; // move the first finger to the next node.
            } else { // if pointer ! = k and pointers arent together.
                pt2 = pt1; // move your 2nd finger to your first finger.
                pt1 = pt1.next; // move your first finger to the next node.
            }
        }
    }
    return l
}